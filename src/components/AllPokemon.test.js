import App from "../App";
import { screen, waitFor } from '@testing-library/react';
import { render } from "../../testutils";
import AllPokemon from "./AllPokemon";
import { server } from "../mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Sample", async () => {
  server.events.on('request:start', ({ request }) => {
    console.log('MSW intercepted:', request.method, request.url)
  })
  render(<AllPokemon />);
  screen.debug();
  await waitFor(() => {
    expect(screen.getByText(/Data Fetched/)).toBeInTheDocument();
  }
  ).then(() =>
    screen.debug()
  )
},2000);