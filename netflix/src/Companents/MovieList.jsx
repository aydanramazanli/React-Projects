import React, { useState } from "react";
import "../Css/MovieList.css";
import Movie from "./Movie";
import shortid from "shortid";
import Detail from "./Detail";

export default function MovieList() {
  const [data, setData] = useState([
  { category: "Action", 
    movies:[{
    id:1,
    name:"Dark", 
    description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    time:"2h 50m",
    img:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWKGy4K_1_dvtIW7celhWo6bXLMybAQPY7sAzW2aoc6gUizViVh4WXlTfUy-wJF09wIxphPT0fFx-LwBRmcJ9dEZ3HiR.jpg?r=077",
    stars:"5 star"
  },
  {
    name:"Stranger Things", 
    description:"...",
    time:"2h 15m",
    img:"https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCPes-ttMtVu0rnEWOa7hszdNY6jJMjBG0dVXNdbWBSBmFdFK9MQZpyv6di8ASdo9brbIU0U1vPFR_juVFfZfw5APcCwErP60M_q5GekUDkpcfe6mjN7nnqoQ7yCQ.jpg?r=dcb",
    stars:"4.5 star"
  },
  {
    name:"Narcos", 
    description:"...",
    time:"1h 45m",
    img:"https://www.nme.com/wp-content/uploads/2017/09/narcos_press_1000.jpg",
    stars:"5 star"
  },
  {
    name:"Breaking Bad", 
    description:"...",
    time:"1h 45m",
    img:"https://www.cnet.com/a/img/X0ca14TIP9jQOQkayXvRlDZQ4jY=/1200x675/2014/06/17/60301c27-9d37-485d-91b9-cc6025e89760/breaking-bad-header.jpg",
    stars:"5 star"
  },
  {
    name:"Venom", 
    description:"...",
    time:"1h 10m",
    img:"https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*141*8276_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYxhRKh7gqUA%5DncKrbnzp8bTCx0AnNnvn7AUC61*wpqePdEMJijISInLlou9Cwr28a4ig0a79pJUxlVQOaTUEJPgRpMd.jpg",
    stars:"5 star"
  }
  ]},
  { category: "Only Netflix", 
  movies:[{
    name:"La Casa De Papel", 
    description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    time:"2h 50m",
    img:"https://www.egypttoday.com/siteimages/Larg/202109041254135413.jpg",
    stars:"5 star"
  },
  {
    name:"Black Mirror", 
    description:"...",
    time:"2h 15m",
    img:"https://www.thedigitalfix.com/wp-content/uploads/2021/10/black-mirror-season-6.jpg",
    stars:"4.5 star"
  },
  {
    name:"Lucifer", 
    description:"...",
    time:"1h 45m",
    img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUPEBIVFRUVFRUQFRUQFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBQYHBAj/xABJEAABAwICBgcDCAYHCQAAAAABAAIDBBESIQUGMUFRYQcTInGBobEykfAjQlJzdJKy0SQlNFPB4RRUYmSTovEVJjM1NmNygrP/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAOBEAAgECBAMFBgMIAwAAAAAAAAECAxEEEiExQVHwYXGBkbETFCIywdEFofEzQlJicrLC4SMkgv/aAAwDAQACEQMRAD8A41ZEKWRSWzpJECVwTtCJCoJrQqwo4VldA6ONRNHABcyODbbL32BXayaObBUSQMvaM4DfeWkg+iD2yz5ONrjVhG6ee67uPWxhcKganLUWtR3FKnqLZGy90VCcDpXXDW5Nt85+7w/Iry9WhU09h8sPKKTa31RUAmDFaGJwxTMEqDPNhRwrKVWji1jZWg4H5Anc4bQvE2O6FTTVw54WUJZWikMTCJbVoLVOSZvXSObFCNssnZ+6Np8FmqbReh29mSrqHHjHGA3wzzSJ4qKdld9yuPjg9NfKzfoc6MaQtXSp9TqacE6Oq2vdt6qcdXIe7d7yFpGlNGyQvMUjC1w2ghHTxEZ6cRVXCJLTy2fkzFhqBavZTw3LQdlxfjZbFr3q+yinEMRLvkmSm/8AbsdlymOqlJR5ilhbxcvy18fK6+hqGBP1asY3Nbq3Vilhjoqmqlf1VSC5+AdpoHpmFKlZQ3Ko4XPrddXf06Zo3VpSxdGfS6ABymrPuBVSUugP39b9xqR73/LLyDeEVr3OdlqgYsppaODrnClLjFfsmXbbmtlodUoBRxaQmmdgdP1Lw1pvYXJIHfzT5V4xSbvr2aioYNyk1dct9+uf+jRsCBYukTUer4JwzVhH/gP4rzPptAfvq3/DH5pXvf8AJLyLeDXGS/P7HPsKgasxrDHTCe1E57obCxkBDie5ZvUrVllYKnG8tdDC6cADc3xy/knOsowzu/1Exwt5uN1px4bdm/Lb8tTTurQLF0bR0Gguoj691V1tvlOrAw38QlqKTQLsmy1cZ4uaHgeAIKU8Xb92XkPeB1tmRzgtSkLcdO6qCOMVFNI2eEm2KPa08Hjcfi61F7Vpp1Y1FdGLEYaVLfrrz5kjKhKEaF0Yi/woZC6VRWVc9dlEVEk3WCxQ7UWI2UGJaGzdHQ/WFJ9fD+II69MtW1P18n4ih0ff8wpfr4vxhXa/j9Oqfr5PxOWFv/s/+fqdSlFezt2fU1QtVkbLlQheinsMytTloZqdNOWpttXTRN0Q2V7gCJw1o3vJZewHHIn3rSHT8lKqpMhHAZNB+aNpHiqXBXh8P7NPM7ttvuvwObjvxGVWo1Tdorbm11t2bnoaSdnmVZTzZjFs815Y2XytntXqa5o4C17W5p7gmtjJTxNWLzKT9fU6TW6PjGhYnghxdK54I3NOG477sGS1rVLQoqKhrHZMF5JD9FrcyfuhYXR9Q9pMYcerkObb5YgMnW45Wut61OZhpa+YbRAGA8MRF/RcitCWHjJJ76rxPVYSv7xh3VfzJtd12rW89DA636eM8mFnZhZ8nGwbLDjxK1kyK6rGa8blrpU1GKihWJm4ystkeuGrc0hzSQRmCDYg8Qdy9+ntYJqssdMb4GBgIABLQLNvzWEupdH7NNp22EOvK1j20Q7Q71u/TAP01p/u8PoVpNB7Q7wt36YP2tv2eH0KzVP20PH0NEV8Me6f+Jz6Jua6Brg39VaM+rf6laFCM11as0Kaui0XA2VkRcyTtvNm5HjxVYiVpwb4FUUlFX5v+yZyN5KqLl0ufoqmF7VVL4zW/gtP1s1dfQvbE98TyW4vknYgLbrp9LEU5vLF6mOpB2ck7mIp9oXTp2/7vM+1u/AVzKm2hdc0fQGo0JDAHtYX1pbiceyOwdqDEu2VvmaMKvgX9S9DkUhVDnLpVR0VVAJAqqU98wHlZavrZqrJQ4DJJE8vvYQuxWtxKZTxNKUsqlqY6tObTktt/A1sFdK6InWdW/YZVzRq6T0RjtVv2GX0VY52ovw9UDhNzQJ3Khrl7pqV1hLhIYbDFY2vbZfwV1LoOd9sEMjsWzCxxB8bJ2aKWoydGrKb0Nh6MJy6tZSntRVHyMjNxBv2u8W8uS0/TMAjlkjBvhe5txvwuIuukaF0b/smJ9fVjDO5hjpofnNLhbrCOXxvty2pluS47zdLoPNVlJbaLxXVheNeWjFPre787L9LFTClJRjSFbTkN6Ia6l0ql1ZWYyCiiICznWsFgT2QYEyFsbFaGyag/t9N9fD+NerpBZ+nVP17/Vy8GpkobWU7ibATxOPc1y2vWTVypq66qfTxGQCTFdhGYJJFrlYKklGvd/w/U6tDLk1dtH6nOy1JUmzD7lux6PNIb6WTy/NYDWfQM9M1rZ2FjnXc0POZDdpsDzC0U60JzSTMmKpxjRm1JbPZr7muMWe0dq+ZbAOwk532rB04zsuh6qtBA4ha6snFXR56jCMnqYyp1DnsDGQ/dlkfNemh6Mqp7cUhbHydmfGy6fo2KzQVlonkhIVWVh0qME9j5801oGejfgmHNjm5tcB9E+7JbvqHK2RlTSnbPA4N5uGbR6r09Lb7Mp7bccjR3Fov6eS0zR1a6GRsjHWc0ixHI3ScWnUprmdb8Hh+1gno1Hfnq16I8ekachxBFiCQRwIWOcxdKq46fSb4xBaKokv1uItbHkPaadlzw/hksBpHU2riJD4JNtrhjnA8wRuS6WIW0tHyOnXpKpK+zfBtL9UaiWoBq2ug1OqpjZsDmje6RrmNaOJJ3KvWrRFPTlkUM3XSW+WI9gO34Xb05V4uSjx635GOWG1eq0MLQe0O9bv0v/tbPs8PoVo1KbOHet36XHfpbPssHoUmo7VoePoOXyx7pf4miQ7V0HXB1tF6M+rk9SuexnNbzro/9V6M+qf6lSsr1IFUpZYp8m/7ZGjSTryyPupI5It0Y2ObWrSk7Nl1NtC6fU/9Ps+2O/8AmVzCnOa6l1D36BhYxpc51YcIAzN2kC3vCy4p2cX2/c14V/Av6kcvkeV533K2ObVKtBINLPcf9tx8wFQ7VWs/qs/+DJ+SfGpDmjPVpzlf7mAAXSeiL2q37FL6LQtI6Pkgd1czHMda+F4sbHkt66Jn2fWj+4y+iTjneg31ugMNHLNpg1T1ta2MUFZG2SmO3sjrGE5Yvd8FbdrHpavpYGf0OVjqW3ycsbe00WyDnA+frtPFDNY5LbdUddH0xMbx1kDspI3Zi28t4H4y2oamHs80V4GpVYTld2bvez2duPY+178TXNM18sri+V7nu3l5uf5LBuK6XrdqvFJEa/RzushOb2D/AIkRO4jhf8uS5o7atmHlGUdDl/iKedS4P6cO9EaUiii0HNIooooQyVkyARWY7SQWolFqhVDeBbE8g3GR23CylLpiZhJbK+52kOOdtiwwKfElygpbo00q0oaI2IayVX7+T7z/AM14q2ufI7FK9xNsILyTYZm2fxmsVjVzHX2oYU4wlexMVVlWpOC7/IppIu04DiQPBZzQ76kPDISC4uDO23si+wk7m8+SxOjnWfc/SK6zqsIsAeAL2zyBK0VJ5e08/ShdaOwuressmNtJUxFkpOFtvYdb0Xr0lrPNC9sDKVz3vf1TbnA0u7yOButfFcZdKxWzwSAZcALLpctCx+bmgkG3aF72OSRomtB723OaafdNUw9dUhjWw9a5oYHXx9mKxLsnC7xYjIrRi5dC6UK8MDKZotiBJtsDAWkD7zR91c2LkL+I7OB/46fez0slIzCzVFrjWxACOpkAG4ONvctaxKYkMqUZfMrm119LOz79TYNKa21c4tNUSOHBzyG+WS16R90C5IUUKcYKyVjPUqtqy2CH2zC9eldMTVDg+ofjcAGg8hsC8JVZTcqbuZXVklZDYlkdIadmmjihkcCyEFseW4ix9SsUUCCrcIuza2FKrNJpAc5BGyFkZmle48b7Z+5ZKk07URhoZM8BjusaAcgeQ4LEkJVJQUt0FCvOnszcz0i6SOZrJfBwHkEh6RdJf1yX7y0/EgXJXutL+FeSCeKl0ke/SulJah5mneXvPznZFejQ2sU1K2VkNh1zMDidoabXA47AsKUpTnSg45WtDP7zUjPPF69c+tuQxcgJLJCkKakZJTaMto/T00Ae2F5aJG4HgHIjmFiSlUUUEm2luVOtUmkpO6W3YRRRREKIooooQyiilkLLMdvUYFRDCiQoFryCE4VYCdUEmFWxhUYUJX4dhNz8XVZb6IkqqprNJaFt7E963LR+l+qpyASCRYEZWvzWl04u0cQtg0DVNc008liCb57k2aujjwl8TfM92qbamKcVDYHSNaRuN+0bDMA7z6rqsGnGONiHNkILizOwHjuz281q2iNASxgGKOmeNhc8EEDeDhNirNbtNimgMcYY17gW9gWAJyJaOFr+SRNp6mmEP3UaHrnpTr6qR42N+Tbbg29/MlYC6LxzPvKQs7/eVEkdX4opJLYhcgXqJCEVgJSkEvS40CEC3vRWQlzkQyIGRApS1WkhUpyG6xTGksirsgc8uIS5DEhZKWq7IFykNiQxIYUCFdgLsl0C5QpSFYtthLkhcjZQhEhbbYhcgSiQlIVoVK4qiiisAiiiihCKKKKEMpiRCAsmFuKznaV+foS6F0wCICoYr8yX+ApnuwolwG0pOuJ2ZDzUUW9kBUrQp/M9eS3LHSW3Z/RXifcm52q1zdwTyRJ0YKJza+IlV32Fp32Wco6AyDGw+PBYPDbPdsXv0XpCSF4dG4C+RD/ZI/tBXJNrQTFridC0A2rLeqEjWgG4cWud5AgLXNf7x1bYi4vtE1zicu05z72G4WDVvWq2kWzxCZgttDhts5u0X3jeDwIXNdeKrrK6Vx3BjPcP5rNTvKbTNUpZEpwfIxxaeHmlISRyXy8VYUTpNG6GPhL5rrya/JFOfwUPDzTuakLSq7xl01eLuKUngmQKsXIQhDNMQhZWKkgIIFFELFUTEIWVlCoJlCoUKgmKCgLEuo5FAokLaEKUqwhKUQqSKygmKVWKIooooQiiiihDJ3UUCIWc7QVU6YnknkOS84RwV9THiqsotRi7Dhq9DAlYFaAmmNIeJud1XnnwVoCBHmoQrtZXxRXHkg9qNO7Pv9QoQ3vomrSHz0bvnNE7O9tmP94LPcVp2tTf0mdwzHWO/wAuR9FmNVqwQVMVQ51g1xjeCNscjXNJJ3AOwnwWGdN1rnyW9vHIf/dxdb/MlqFqjfZ16DHL4Eu08NOzsgpijCOz3IOTBYVW3eFaQqXZG6Gauh1CeSom9it0YS2HBO5KkI6Ukr7CqKEdymfLzRCvAUhSybPkpbuUKsuQlkU1u5LhKsq1uACEbKIAKAhSkolqFlZHcBKUprJSFYDFKUpyECFaYuSKylITkJbIhDiLZGyNlLKyrARRQVXJY9ocji5IEoBJOndhkOSrCd6QJsNjDiHeZ6IgrWi4uqoxvCsjfZ1txz8UQotYUxF8lW/Iq1qhAs2WO34zSlv5jvTW3piLqEHfJeJ3NpRpgGxg8R5AWXlL7XHHP81tGq+qxc3+kV3ycTQHNjfkXbwX32N5IZTUVdhRi5OyNb0TSyTvMMLTI8nJrMznx3AczkvdQ6vVc+Iw08jw0lrjYNAIJBF3EAkEbAunaIbLUuuxghg9kdWML3jZtHst8ys3BNZ5pqawa0fKOFuznhLWD5xuCCdgNxmQQE+1fId7FbNnBZMrgixBIIORBGRBHFeeZZrWfR4jq542SBzBIbPe4FzibOde28OLgTbcsNJ6J6dxLi1uhLpSrBsSkpMlZnTg80ExCpdEFS6hLAQRuhdUURRG6BVlMgQRSkqwWFKVChbkrBZClTFBQFoVAlOUhVoXIQoJ3JEQmSCgiooSwLI2UspZQux6R8XTgqolEOS7GtSSDIozgg4pbpkdjHWd5sujJb3KycZYh3oNCd8eWWw/F0QstJxNuhC7cqaZ+Vk42qFnpa5G9svH81QCi9+XPcoQcZvbyNz3DNbDPXTVRvI64uLNGTbjZ3+KwOjWYy4jc0eZW5aKocEeI+0RlyHFZ6rtuaKUWzedB1zHRikDryYe2Wm2R2kEb+YVFPqy5lZ10bgGCIxlxBxjEQSxp3izRmfZudpOWD0bhhlEuEuIucja+70W6vqWSMxOdZu1wuBkBmCfmjj3JEXYdKJyXpN0Z1VV18bLQzDJzT2TIzKTZsPsnncnitOBy+Nu4LbukTWplW9kMAAhhvhIFg5xAHZG5oAy434bdSh9M1thfKrmOWsmWObl4/6+arPj5Kx4vYcM1W4cigmtTZhZXg1y+pWie/yCPgfcpZAaOuIAPiyBR8EC0qweH6gsoe9EBQtVXJYBQNkbIW5IrAsBQAUKPvVgMUoWTFKoCyWSkJrpSVYDsKUqYlS6IW7CqIoKFDKKKKEHupdKpdCHmY+JKoCgCiiJq73L4pLL2RFeBo4r0MkFreaIBCYhc2VocqAM1Y0Hbu2/koWi10gVZBO1Rmy6ZyhC/RsvVvD92xw4tvmF1JrQ9jXssWuaHBw3ghcpLslkaDWWeCIwREWJLm4hfDf2sOfjbvSqlPNsNp1Mu50Bthd7yAADcusAAON1o+sesZkxQwuIhvnu6w8SPo8j48FiqjSE0o+Ve53LYPcF4nnOxy5HJSFLLqy6lbNotgjirY8lU4pgU0SWOdv529yUpCeY5cuaDXJc0acJJJtD8kpCBsplw80Bscg2QwqZc/eplz96orrcgBQKNhzQICsiIophHNKR3qAvuAophUsiA1AULooKAu5LoXRsECFYLuAlKUxQIVi2KoigrKAiiioULdLdFRQByZLqXRUVoFjAqxp3KKKwS0ncrG+y4cwoooECUWtZLdRRQhdRPaHDGLi/rs8/Vb5ojRzmOLIDT3eGEu9kgC+TS1ttt77FFEmu7IfQWtzcIqqtiaAaXrBb2opIj5OcCvZTyPlGCSlcBaxEoZhtwzNigos1kPzO5yTXjV/+j1LurFonkvYPo/SYOQJuORC1sR8VFFspu8UzHVSUrIsakIz+PBRRXLYOj86IggolG241kFFFaIQqXQUUKvYGJC6KiuwGZkulKKihbAlKiisB6BugVFFARbKIKKwWSylkFFYI1kLIKKEP/9k=",
    stars:"5 star"
  },
  {
    name:"Locke and Key", 
    description:"...",
    time:"1h 45m",
    img:"https://cdn.vox-cdn.com/thumbor/4ZWtFHeHa5q9piBspAL-E8mFPXM=/0x0:3600x2400/1400x1050/filters:focal(1600x744:2176x1320):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66273498/LOCKE_105_Unit_00323R2C3.0.jpg",
    stars:"5 star"
  },

  ]},
  { category: "Documentary", 
  movies:[{
    name:"Love and Death", 
    description:"A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    time:"2h 50m",
    img:"https://upload.wikimedia.org/wikipedia/en/f/fe/Love%2C_Death_%2B_Robots_logo.png",
    stars:"5 star"
  },
  {
    name:"Lupin", 
    description:"...",
    time:"2h 15m",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Mhuq7yJsvf6HojQn4lCDGZOWaVChlPm7JQ&usqp=CAU",
    stars:"4.5 star"
  },

  ]}
]);

return(
 <div className="container mx-auto px-4">
   {
     data.map(i=>(<Movie key={shortid()} category={i.category} movies={i.movies}/>))
   }
    

 </div>
)
}
