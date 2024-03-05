import React, {useContext, useEffect, useState} from "react";
import ConfigurationProvider from "../../context/ConfigurationContext";
import Router from "../../routes/Router";
import {Box} from "@navikt/ds-react";
import {AppBar} from "../organisms/AppBar";
import {SourceApplicationContext} from "../../context/SourceApplicationContext";
import axios from "axios";
import {AuthorizationContext} from "../../context/AuthorizationContext";
import {useHistory} from "react-router-dom";

function Main() {
	const {sourceApplications, getSourceApplications} = useContext(SourceApplicationContext)
	const {setAuthorized, getAuthorization} = useContext(AuthorizationContext)
	const history = useHistory();

	axios.interceptors.response.use(function (response) {
		setAuthorized(true)
		return response;
	}, function (error) {
		if (error.response.status === 401) {
			setAuthorized(false)
			history.push('/401') // change to using 401 page
		}
		return Promise.reject(error);
	});

	useEffect(() => {
		getAuthorization();
		getSourceApplications();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box style={{height: "100vh", backgroundColor: "#EBF4F5"}}>
			<AppBar/>
			{sourceApplications && <main>
				<ConfigurationProvider>
					<Router/>
				</ConfigurationProvider>
			</main>
			}
		</Box>
	);
}

export default Main;
