'use client';
import { invoke } from '@tauri-apps/api/core';
import { type FC, useState } from 'react';

export const InvokeExample: FC = () => {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <div>
      <form
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          greet();
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
