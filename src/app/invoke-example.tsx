'use client';
import { invoke } from '@tauri-apps/api/core';
import { type FC, useState } from 'react';

import type { GreetArgs, GreetLabel, GreetResponse } from '@ipc-if/greet';

const greet = (target: GreetLabel, args: GreetArgs): Promise<GreetResponse> => {
  return invoke(target, { args });
};

export const InvokeExample: FC = () => {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function invokeGreet() {
    const { message, timestamp } = await greet('greet', { name });
    setGreetMsg(message);

    console.debug('invoked', timestamp);
  }

  return (
    <div>
      <form
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          invokeGreet();
        }}
      >
        <input
          className="input input-bordered"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value);
          }}
          placeholder="Enter a name..."
        />
        <button className="btn btn-primary" type="submit">
          greet
        </button>
      </form>
      <p>{greetMsg}</p>
    </div>
  );
};
