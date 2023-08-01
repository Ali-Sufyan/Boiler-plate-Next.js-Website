import CourseModule from '@/modules/CourseModule/CourseModule'
import Head from 'next/head'


export default function Course() {
  return (
    <>
      <Head>
        <title>BrainXskill | Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CourseModule/>
    </>
  )
}