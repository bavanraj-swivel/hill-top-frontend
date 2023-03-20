import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface ICustomizedInputBaseProps {
    onSearch: (value: string) => void;
}

export default function CustomizedInputBase({
                                                onSearch,
                                            }: ICustomizedInputBaseProps) {
    const [searchValue, setSearchValue] = React.useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchValue);
    };
    return (
        <Paper
            component="form"
            sx={{p: "2px 4px", display: "flex", alignItems: "center", width: 400}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search...."
                inputProps={{"aria-label": "search google maps"}}
                value={searchValue}
                onChange={handleInputChange}
            />
            <IconButton
                type="button"
                sx={{p: "10px"}}
                aria-label="search"
                onClick={handleSearchClick}
            >
                <SearchIcon/>
            </IconButton>
            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
        </Paper>
    );
}
