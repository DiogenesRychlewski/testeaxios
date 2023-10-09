import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import router from 'react-router';

import { Home } from '../Home';
import { QueryClientProvider, QueryClient } from 'react-query';

const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}))

describe("AsideNav", () => {
    it("should render correctly", () => {
        const queryClient = new QueryClient();
        render(
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
            </BrowserRouter>
        )

        expect(screen.getByText("Adicionar localStorage")).toBeInTheDocument();
        expect(screen.getByText("Remover localStorage")).toBeInTheDocument();
        expect(screen.getByText("Lista de repositórios")).toBeInTheDocument();
    });
})