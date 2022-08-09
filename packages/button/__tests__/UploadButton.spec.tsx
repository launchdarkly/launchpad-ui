import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { UploadButton } from '../src';

describe('UploadButton', () => {
  const file = new File(['(⌐□_□)'], 'launchdarkly.png', { type: 'image/png' });

  it('renders', () => {
    render(
      <UploadButton maxSize={1000000} onSelect={() => undefined} id="test" testId="upload-btn">
        Upload
      </UploadButton>
    );

    expect(screen.getByRole('button', { name: 'Upload' })).toBeInTheDocument();
  });

  it('handles file upload when button is clicked', async () => {
    const spy = vi.fn();

    const user = userEvent.setup();
    render(
      <UploadButton maxSize={1000000} onSelect={spy} id="test" testId="upload-btn">
        Upload
      </UploadButton>
    );

    await user.click(screen.getByRole('button', { name: 'Upload' }));
    await user.upload(screen.getByTestId('upload-button-input'), file);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(file);
  });

  it('handles file upload when spacebar is pressed', async () => {
    const spy = vi.fn();

    const user = userEvent.setup();
    render(
      <UploadButton maxSize={1000000} onSelect={spy} id="test" testId="upload-btn">
        Upload
      </UploadButton>
    );

    await user.type(screen.getByRole('button', { name: 'Upload' }), '{space}');
    await user.upload(screen.getByTestId('upload-button-input'), file);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(file);
  });

  it('handles file upload when enter is pressed', async () => {
    const spy = vi.fn();

    const user = userEvent.setup();
    render(
      <UploadButton maxSize={1000000} onSelect={spy} id="test" testId="upload-btn">
        Upload
      </UploadButton>
    );

    await user.type(screen.getByRole('button', { name: 'Upload' }), 'enter');
    await user.upload(screen.getByTestId('upload-button-input'), file);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(file);
  });

  it('does not trigger onSelect when disabled', async () => {
    const spy = vi.fn();

    const user = userEvent.setup();
    render(
      <UploadButton maxSize={1000000} onSelect={spy} disabled id="test" testId="upload-btn">
        Upload
      </UploadButton>
    );

    await user.upload(screen.getByTestId('upload-button-input'), file);

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('does not trigger onSelect when filesize is greater than maxSize', async () => {
    const spy = vi.fn();

    const user = userEvent.setup();
    render(
      <UploadButton maxSize={1} onSelect={spy} id="test" testId="upload-btn">
        Upload
      </UploadButton>
    );

    await user.upload(screen.getByTestId('upload-button-input'), file);

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
