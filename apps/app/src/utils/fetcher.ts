const baseURL = process.env.API_URL;
const accessKey = process.env.API_ACCESS_KEY;

const fetcher = async (url: string, options = {} as any) => {
  try {

    console.log(baseURL,"base url >>>>" , accessKey , "access key >>>>" , url , "url >>>>")
    const response = await fetch(`${baseURL}${url}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${accessKey}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetcher;
