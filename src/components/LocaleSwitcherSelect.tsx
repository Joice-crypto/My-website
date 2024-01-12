/* eslint-disable @next/next/no-img-element */
'use client';

import clsx from 'clsx';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from '../navigation';
import Image from 'next/image';


type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
  
};


export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <label
      className={clsx(
        'relative text-gray-600',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-white rounded-lg border-pink-900 border-2 pl-1 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      
    </label>
  );
}