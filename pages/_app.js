import '../styles/globals.css'

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>

}
export default MyApp;

