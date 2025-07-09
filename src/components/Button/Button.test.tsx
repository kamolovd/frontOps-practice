import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { Button } from './Button';

describe('Button component', () => {
    test('рендерит переданный текст в children', () => {
        const { getByRole } = render(<Button>Click me</Button>);
        expect(getByRole('button')).toHaveTextContent('Click me');
    });

    test('выводит "Loading ..." если loading=true', () => {
        const { getByRole } = render(<Button loading={true}>Click me</Button>);
        expect(getByRole('button')).toHaveTextContent('Loading ...');
    });

    test('кнопка disabled если loading=true', () => {
        const { getByRole } = render(<Button loading={true}>Click me</Button>);
        expect(getByRole('button')).toBeDisabled();
    });

    test('кнопка disabled если disabled=true', () => {
        const { getByRole } = render(<Button disabled={true}>Click me</Button>);
        expect(getByRole('button')).toBeDisabled();
    });

    test('вызывает onClick если не disabled и не loading', () => {
        const onClick = jest.fn();
        const { getByRole } = render(<Button onClick={onClick}>Click me</Button>);
        fireEvent.click(getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('не вызывает onClick если disabled', () => {
        const onClick = jest.fn();
        const { getByRole } = render(<Button disabled={true} onClick={onClick}>Click me</Button>);
        fireEvent.click(getByRole('button'));
        expect(onClick).not.toHaveBeenCalled();
    });

    test('не вызывает onClick если loading', () => {
        const onClick = jest.fn();
        const { getByRole } = render(<Button loading={true} onClick={onClick}>Click me</Button>);
        fireEvent.click(getByRole('button'));
        expect(onClick).not.toHaveBeenCalled();
    });

    it('не вызывает onClick при disabled=true', () => {
        const onClickMock = jest.fn();

        const { getByRole } = render(
            <Button disabled={true} onClick={onClickMock}>
                Test
            </Button>
        );

        const button = getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Test');
        expect(button).toBeDisabled();

        fireEvent.click(button);
        expect(onClickMock).not.toHaveBeenCalled();
    });
});

