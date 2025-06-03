import { render, screen, fireEvent } from '@testing-library/react';
import TagInput from './TagInput';
 

describe('TagInput', () => {
  it('renders input and adds tags on Enter', () => {
    const handleChange = jest.fn();
    render(<TagInput value={[]} onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Enter tags');
    fireEvent.change(input, { target: { value: 'tag1' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(handleChange).toHaveBeenCalledWith(['tag1']);
  });

  it('does not add duplicate tags', () => {
    const handleChange = jest.fn();
    render(<TagInput value={["tag1"]} onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Enter tags');
    fireEvent.change(input, { target: { value: 'tag1' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('supports custom separator', () => {
    const handleChange = jest.fn();
    render(<TagInput value={[]} onChange={handleChange} separator=";" />);

    const input = screen.getByPlaceholderText('Enter tags');
    fireEvent.change(input, { target: { value: 'tag1;tag2' } });
    fireEvent.keyDown(input, { key: ';', code: ';' });

    expect(handleChange).toHaveBeenCalledWith(['tag1', 'tag2']);
  });

  it('removes a tag when X is clicked', () => {
    const handleChange = jest.fn();
    render(<TagInput value={['tag1', 'tag2']} onChange={handleChange} />);

    const removeButtons = screen.getAllByText('×');
    fireEvent.click(removeButtons[0]);

    expect(handleChange).toHaveBeenCalledWith(['tag2']);
  });
});
