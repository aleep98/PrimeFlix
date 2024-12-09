import { useEffect, useState } from "react";
import api from '../../services/api';
// URL da API: /movie/now_playing?api_key=0cf5142d985256ab23f020f8636ff5de


function Home(){
    const [filmes, setFilmes] = useState([]);


    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "0cf5142d985256ab23f020f8636ff5de",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 10))
        }

        loadFilmes();
    }, [])


    return(
        <div className="container">
            <div className="listta-filmes">
            {filmes.map((filme) => {
                return(
                    <article key = {filme.id}>
                       <strong>{filme.title}</strong>
                       <img src={`https://image.tmdb.org/t/´/original/${filme.poster_path}`} alt={filme.title}/>
                       <Link to ={`/fime/${filme.id}`}>Acessar</Link>     
                    </article>
                )
            })}
            </div>
        </div>
    )

}

export default Home;