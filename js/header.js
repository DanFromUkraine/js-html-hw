const header_container = document.querySelector("header");
const first_ul = `
        <ul>
          <a href="/"><li>woman</li></a>
          <a href="/"><li>man</li></a>
          <a href="/"><li>all</li></a>
        </ul>
`;
const new_header_code = `
${first_ul}
        <img-wrapper><img src="./img/yourSNEAKER.svg" alt="логотип" /></img-wrapper>
        <ul>
          <a href="/" id="loginBtn"
            ><li><img src="./img/profile.svg" alt="" /></li
          ></a>
          <a href="/"
            ><li><img src="./img/search.svg" alt="" /></li
          ></a>
          <a href="/"
            ><li><img src="./img/cart.svg" alt="" /></li
          ></a>
        </ul>
`

header_container.insertAdjacentHTML('afterbegin', new_header_code);

export const ul = first_ul;