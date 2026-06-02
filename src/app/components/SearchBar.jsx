"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SearchField, Label } from "@heroui/react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    router.push(`/allpets?${params.toString()}`);
  };

  const handleClear = () => {
    setSearch("");
    router.push("/allpets");
  };

  return (
    <SearchField
      name="search"
      value={search}
      onChange={setSearch}          // 👈 only update state, don't push yet
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}  // 👈 push on Enter
      onClear={handleClear}
    >
      <Label className="text-xl font-bold p-3">Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-[280px]" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
};

export default SearchBar;