import Display from "../Display/Display"
import Header from "../Header"
import Main from "../Main"

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