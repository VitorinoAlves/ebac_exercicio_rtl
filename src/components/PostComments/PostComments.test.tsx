import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    
    it('Deve adicionr dois comentários', () => {
        render(<PostComment/>);
        const commentField = screen.getByTestId('comment-field');
        const btnComentar = screen.getByTestId('btn-comentar');

        fireEvent.change(commentField, {target: {value: 'Comentário teste 01'}});
        fireEvent.click(btnComentar);
        fireEvent.change(commentField, {target: {value: 'Comentário teste 02'}});
        fireEvent.click(btnComentar);

        expect(screen.getByText('Comentário teste 01')).toBeInTheDocument();
        expect(screen.getByText('Comentário teste 02')).toBeInTheDocument();
    })
});