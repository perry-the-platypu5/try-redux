import App from "../App";
import * as React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from "../../testutils";
import AllPokemon from "./AllPokemon";
import { server } from "../mocks/node";
import {http, HttpResponse } from "msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("AllPokemon Test Suite", () => {
    test("Fetch Successfull", async () => {
      server.events.on('request:start', ({ request }) => {
        console.log('MSW intercepted:', request.method, request.url)
      })
      renderWithProviders(<AllPokemon />);
      await screen.findByText("Loading ...");
      await waitFor(() => expect(screen.getByText(/bulbasauraaa/)).toBeInTheDocument());
      React.act(()=>{userEvent.click(screen.getByText(/bulbasauraaa/))})
    }),
    test("Sample", async () => {
      server.events.on('request:start', ({ request }) => {
        console.log('MSW intercepted:', request.method, request.url)
      })
      server.use(
        http.get('https://pokeapi.co/api/v2/pokemon', () => {
          console.log('Captured a "GET /pokemon" request Error')
          return new HttpResponse(null, {status:404});
        },{ once: true })
      );
      renderWithProviders(<AllPokemon />);
      // await screen.findByText("Loading ...");
      screen.debug();
      await waitFor(() => expect(screen.getByText("Error Loading Data")).toBeInTheDocument()).then(()=>screen.debug());
    },3000)
})