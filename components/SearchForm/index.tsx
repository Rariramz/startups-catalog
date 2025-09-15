import { SearchFormResetBtn } from "@/components/SearchFormResetBtn";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Form from "next/form";

export const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormResetBtn />}
        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
};
