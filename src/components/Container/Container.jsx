import Display from "@components/Display";
import Header from "@components/Header";
import Main from "@components/Main";

const Container = () => {
  return (
    <section className="max-w-72 m-auto bg-white dark:bg-indigo-950 rounded-md p-2 shadow-md ">
      <Header />
      <Display />
      <Main />
    </section>
  );
};

export default Container;
