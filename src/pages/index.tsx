import Head from "next/head";
import Background from "@/components/Background";
import Form from "@/components/Form";
import Result from "@/components/Result";

const HomePage = () => {
  return (
      <>
        <Head>
            <title>Счетчик калорий</title>
        </Head>
        <Background />
          <div className="counter">
              <h1 className="counter__title h1">Счетчик калорий</h1>
              <div className="counter__body wrapper">
                  <Form />
              </div>
          </div>
          <Result />
      </>
  )
}

export default HomePage
