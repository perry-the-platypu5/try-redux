import { useGetAllPokemonsQuery } from "../services/pokemon";
import Pokemon from "./Pokemon";
import {useState} from 'react';
function AllPokemon() {
    const { data, isLoading, error } = useGetAllPokemonsQuery();
    const [name, setName]= useState();
    return (<>
        <h3>All Pokemon</h3>
        {error? <>Error Loading Data</> : isLoading===true ? <>Loading ...</> :
            <>
                <ul>
                   {data.results.map(ele=>
                    <li key={ele.name} onClick={()=>setName(ele.name)}>{ele.name}</li>
                   )}
                </ul>
                <Pokemon name={name}/>
            </>
        }
    </>);
}

export default AllPokemon;