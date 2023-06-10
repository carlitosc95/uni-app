interface UniversityData {
  country: String;
  alpha_two_code: String;
  name: String;
  web_pages: Array<String>;
}

interface ListProps {
  items: UniversityData[];
}
interface QueryData {
  uni_name: string;
  country: string;
  limit: number;
}
interface InputProps {
  placeholder: string;
  onChangeCallback: ({ data, key }) => void;
  name: string;
}
export { UniversityData, ListProps, QueryData, InputProps };
