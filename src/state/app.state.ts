import { atom } from "recoil";
import { SearchDataFragment } from "../generated/graphql";

export const searchDataState = atom<null | SearchDataFragment>({
  key: "searchDataState",
  default: null,
});

export interface ApiStatus {
  loading: boolean;
  error: boolean;
}

export const apiStatusState = atom<ApiStatus>({
  key: "apiStatusState",
  default: { loading: false, error: false },
});
