package com.williambertoldo.apihematobusca.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.williambertoldo.apihematobusca.entity.Doador;
import com.williambertoldo.apihematobusca.repository.DoadoresRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.net.URL;

@Component
public class JsonDataLoader {
    private final DoadoresRepository doadoresRepository;

    @Autowired
    public JsonDataLoader(DoadoresRepository doadoresRepository) {
        this.doadoresRepository = doadoresRepository;
    }

    @PostConstruct
    public void loadDataFromJson() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            URL url = new URL(
                    "https://communication-assets.gupy.io/production/companies/52441/emails/1686945524213/e8330670-6f23-11ed-91a8-05f5cf6759fb/data_1.json");
            Doador[] doadores = objectMapper.readValue(url, Doador[].class);
            for (Doador doador : doadores) {
                if (!doadoresRepository.existsByCpf(doador.getCpf())) {
                    doadoresRepository.save(doador);
                }
            }
            System.out.println("Dados do JSON salvos com sucesso!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
