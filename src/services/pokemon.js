import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`
        }),
        getAllPokemons: builder.query({
            query: () => "pokemon"
        })
    })
});

export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery } = api;