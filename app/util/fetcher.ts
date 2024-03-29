
export  const fetcher = async (url:RequestInfo | URL) =>{
    const res = await fetch(url);
    // console.log(res)
    if (!res.ok) {
      console.log(res.ok)
      const msg = "an error cucurred shlt fetching ";
      const info =  await res.json();
      const status = res.status;
      const error = new Error(msg);
      console.error(info ,status);
      throw error;
    }
  
    return res.json()
}