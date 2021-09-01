import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";
import { moviesApi } from "../../api";
import { Section } from "../../components/Section";
// import { Testing } from "../../components/Testing";
import { PageError } from "../Home/PageError";
import { PageLoading } from "../../components/PageLoading";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.div`
  margin-top: 150px;
`;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 97%;
  padding: 20px;
  border: 1px solid #555;
  &::placeholder {
    font-size: 20px;
  }
  font-size: 20px;
`;

const SearchWrap = styled.div`
  width: 100%;
  margin-top: 100px;
  display: grid;
  row-gap: 50px;
  column-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
`;

const Con = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    display: none;
    margin-top: 10px;
  }
`;

const CoverImg = styled.div`
  /* width: 315px; */
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Search = () => {
  const { register, getValues, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [nowSearch, setSearch] = useState();
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false);

  const onSubmit = async () => {
    const { term } = getValues();
    try {
      const {
        data: { results },
      } = await moviesApi.search(term);

      // if(results.length <= 0){
      //   setNosearch("검색 엑스")
      // }else{
      //   setNosearch("")

      // }
      setSearch(results);
      setLoading(false);
      console.log(await moviesApi.search(term));
    } catch (error) {
      setPageError(true);
      console.log(error);
    }
  };
  console.log(nowSearch);
  return (
    <div>
      {/* 1.서치 페이지 스타일
      2.인풋태그 내용 알아오기 (react-hook-form)
      3.api 에서 search를 가져와 매개변수로 인풋태그 내용 전달하기
       */}
      <PageTitle title={"검색"} />
      <Section>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("term", {
                required: true,
              })}
              type="text"
              placeholder="검색..."
            />
          </Form>
          {pageError ? (
            <PageError />
          ) : (
            <>
              <SearchWrap>
                {nowSearch && loading ? (
                  <PageLoading />
                ) : (
                  nowSearch &&
                  nowSearch.map((play) => (
                    <Con key={play.id}>
                      <Link to={`/detail/${play.id}`}>
                        <CoverImg
                          style={{
                            backgroundImage: `url(${
                              play.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${play.backdrop_path}`
                                : `https://i.ytimg.com/vi/5SuveFZ5_H0/maxresdefault.jpg`
                            })`,
                          }}
                        />
                        <Title>{play.title}</Title>
                      </Link>
                    </Con>
                  ))
                )}
              </SearchWrap>
            </>
          )}
        </Container>
      </Section>
    </div>
  );
};
