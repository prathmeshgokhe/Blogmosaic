import { createClient } from "next-sanity";
import { UseNextSanityImageBuilder } from "next-sanity-image";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
};

export const sanityClient = createClient(config);
export const urlFor = (source) => UseNextSanityImageBuilder(config).image(source)