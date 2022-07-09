## Movie app

- [JSX html태그 자동완성](https://velog.io/@swanious/React-HTML%ED%83%9C%EA%B7%B8-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
- [CRLF will be replaced by LF 워닝 해결](https://blog.jaeyoon.io/2018/01/git-crlf.html)

> movie api

- [api](https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year)

> async , await

```react
const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    const json = await response.json()
    setMovies(json.data.movies)
    setLoading(false)
  }
useEffect(() => {
  getMovies()
}, [])
```

- async&await를 쓸때는 async 함수를 만들고 then이 필요한 자리에 await를 쓰고 변수에 할당해야함

<br>

> api로 데이터를 받아온 모습

![image-20220710000316986](README.assets/image-20220710000316986.png)

