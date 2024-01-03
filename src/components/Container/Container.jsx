import Display from "@components/Display"
import Header from "@components/Header"
import Main from "@components/Main"

const Container = () => {
  return (
    <section className='max-w-sm m-auto bg-indigo-950 rounded-md p-2'>
      <Header />
      <Display />
      <Main />
  </section>
  )
}

export default Container