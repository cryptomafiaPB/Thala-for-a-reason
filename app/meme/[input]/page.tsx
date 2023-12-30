'use client';
import { useParams } from 'next/navigation';
export default function Share() {
  const params = useParams<{ input: string }>();

  return <div>Share page {params.input}</div>;
}
