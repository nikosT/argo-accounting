package org.accounting.system.wiremock;

import com.github.tomakehurst.wiremock.WireMockServer;
import io.quarkus.test.common.QuarkusTestResourceLifecycleManager;

import java.util.Collections;
import java.util.Map;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;

public class ResourceWireMockServer implements QuarkusTestResourceLifecycleManager {

    private WireMockServer wireMockServer;

    @Override
    public Map<String, String> start() {

        wireMockServer = new WireMockServer(3469);
        wireMockServer.start();

        wireMockServer.stubFor(get(urlEqualTo("/resource/all?catalogue_id=all"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "application/json")
                        .withStatus(200)
                        .withBodyFile("json/Resources.json")));

        wireMockServer.stubFor(get(urlEqualTo("/resource/all?catalogue_id=all&quantity=415"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "application/json")
                        .withStatus(200)
                        .withBodyFile("json/Resources.json")));

        return Collections.singletonMap("quarkus.rest-client.\"org.accounting.system.clients.ResourceClient\".url", wireMockServer.baseUrl());
    }

    @Override
    public void stop() {
        if (null != wireMockServer) {
            wireMockServer.stop();
        }
    }
}
