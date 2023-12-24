import Display from "@components/Display"
import Header from "@components/Header"
import Main from "@components/Main"

const Container = () => {
  return (
    <section className='max-w-sm m-auto border'>
      <Header />
      <Display />
      <Main />
  </section>
  )
}

export default Container