import { useState } from "react";
import { QueryData, UniversityData } from "./types";
import "./App.css";
import TableContent from "./components/TableContent";
import QueryContainer from "./components/QueryContainer";
import QueryInput from "./components/QueryInput";
import { useQuery } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import { getUniversitiesData } from "./helpers";
const SEARCH_URL = import.meta.env.VITE_API_BACKEND_RELEASE;



function App() {
  const [queryData, setQueryData] = useState<QueryData>({
    uni_name: "",
    country: "",
    limit: 5,
  });
 
  const { isLoading, isError, data, refetch, isPaused, fetchStatus } =
    useQuery({
      queryKey: [queryData.country, queryData.uni_name, queryData.limit],
      queryFn: () => {
        if (queryData.country === "" || queryData.uni_name === "") {
          return Promise.reject(new Error("empty fields"));
        }

        return getUniversitiesData(buildUrlQuery(queryData));
      },
      refetchOnWindowFocus: false,
      enabled: false,
    });

  const handleRequest = () => refetch();

  const handleQueryInput = ({ data, key }) => {
    const shallowQueryData = { ...queryData };
    shallowQueryData[key] = data;
    setQueryData(shallowQueryData);
  };

  const buildUrlQuery = ({ uni_name, country, limit }: QueryData): string => {
    return `${SEARCH_URL}&country=${country}&name=${uni_name}&limit=${limit}`;
  };
  return (
    <div>
      <NavBar/>
      <section className="query">
        <h3 className="font-normal mb-3 text-lg">
          Type a country and a university name
        </h3>
        <QueryContainer>
          <div className="w-full">
            <QueryInput
              onChangeCallback={handleQueryInput}
              placeholder={"Country"}
              name="country"
            />
          </div>
          <div>
            <QueryInput
              onChangeCallback={handleQueryInput}
              placeholder={"University name"}
              name="uni_name"
            />
          </div>

          <div className="indicator mr-0.5">
            <button
              disabled={queryData.country === "" || queryData.uni_name === ""}
              onClick={handleRequest}
              className="btn join-item rounded-r-full"
            >
              Search
            </button>
          </div>
          {isError && !isLoading ? "Error found" : ""}
        </QueryContainer>
      </section>
      <section className="universities">
        <h5>
          {fetchStatus === "idle" && isLoading
            ? `No data fetched`
            : isLoading
            ? "Loading"
            : `${data.length} record were found`}
        </h5>

        <div>
          {!isLoading && <TableContent items={data} />}
        </div>
      </section>

      <section className="pagination flex flex-row">
    
        <select
          className="select select-bordered select-sm m-2"
          defaultValue={5}
          onChange={(e) =>
            handleQueryInput({ data: e.target.value, key: "limit" })
          }
        >
          <option disabled defaultValue={5}>
            Size
          </option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </section>
      
    </div>
  );
}

export default App;



/**
 *
 * TODO:
 * - render a basic sample from api[✅]
 * - pagination  []
 * - header with [✅]
 *  - country    [✅]
 *  - name       [✅]
 * - cache with react query[✅]
 */
