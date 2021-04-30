import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import Card from "../components/Card";
import LoadSpinner from "../components/LoadSpinner";

import { usePopularTvShows } from "../config/useTv";

interface Props {}

export default function Tv({}: Props) {
  const router = useRouter();
  const { tvshows, isLoading } = usePopularTvShows("1");

  return (
    <div>
      <div className="container mt-8 mx-auto relative">
        <Head>
          <title>Séries em Destaque | ShowMovie</title>
        </Head>
        <h2 className="mb-8 text-3xl font-heading font-semibold text-dark ">
          Séries em Destaque
        </h2>
        {isLoading ? (
          <LoadSpinner />
        ) : (
          <div className="grid w-full grid-cols-6">
            {tvshows && tvshows.map((tvshow) => <Card show={tvshow} />)}
          </div>
        )}
      </div>
    </div>
  );
}
