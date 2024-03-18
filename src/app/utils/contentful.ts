import { ContentfulResponse } from "../types/contentful.type";
import { appConfig } from "@/app/utils/config";

const { accessToken, baseUrl, environmentId, spaceId } = appConfig;

export const getEntries = async (): Promise<ContentfulResponse> => {
  const response = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`, { cache: "no-cache"}
  );  

  return response.json();
}
