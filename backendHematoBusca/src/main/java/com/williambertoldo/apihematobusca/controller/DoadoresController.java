package com.williambertoldo.apihematobusca.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.williambertoldo.apihematobusca.entity.Doador;
import com.williambertoldo.apihematobusca.repository.DoadoresRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DoadoresController {
    private final DoadoresRepository doadoresRepository;

    @Autowired
    public DoadoresController(DoadoresRepository doadoresRepository) {
        this.doadoresRepository = doadoresRepository;
    }

    @GetMapping("/")
    public String teste() {
        return "Back-end Online!";
    }

    @GetMapping("/doadores-por-estado")
    public int getDoadoresPorEstado(@RequestParam("estado") String estado) {
        return doadoresRepository.countDoadoresByEstado(estado).intValue();
    }

    @GetMapping("/imc-por-faixa-idade")
    public List<Map<String, Object>> getIMCPorFaixaIdade() {
        List<Object[]> results = doadoresRepository.calculateAverageIMCByAgeRange();
        List<Map<String, Object>> response = new ArrayList<>();

        for (Object[] result : results) {
            Map<String, Object> data = new HashMap<>();
            data.put("faixaIdade", formatFaixaIdade(result[0]));
            data.put("imcMedio", result[1]);
            response.add(data);
        }

        return response;
    }

    @GetMapping("/percent-obesos-por-genero")
    public Map<String, Double> getPercentObesosPorGenero() {
        Long totalMen = doadoresRepository.countDoadoresBySex("Masculino");
        Long totalWomen = doadoresRepository.countDoadoresBySex("Feminino");
        Long obeseMen = doadoresRepository.countObeseMen();
        Long obeseWomen = doadoresRepository.countObeseWomen();

        double percentObeseMen = (obeseMen.doubleValue() / totalMen.doubleValue()) * 100;
        double percentObeseWomen = (obeseWomen.doubleValue() / totalWomen.doubleValue()) * 100;

        Map<String, Double> response = new HashMap<>();
        response.put("percentObeseMen", percentObeseMen);
        response.put("percentObeseWomen", percentObeseWomen);

        return response;
    }

    private String formatFaixaIdade(Object faixaIdade) {
        if (faixaIdade instanceof String) {
            return (String) faixaIdade;
        } else if (faixaIdade instanceof Integer) {
            int lowerBound = (Integer) faixaIdade;
            int upperBound = lowerBound + 9;
            return lowerBound + " a " + upperBound;
        } else {
            return null;
        }
    }

    @GetMapping("/media-idade-por-tipo-sanguineo")
    public List<Map<String, Object>> getMediaIdadePorTipoSanguineo() {
        List<Object[]> results = doadoresRepository.calculateAverageAgeByBloodType();
        List<Map<String, Object>> response = new ArrayList<>();

        for (Object[] result : results) {
            Map<String, Object> data = new HashMap<>();
            data.put("tipoSanguineo", result[0]);
            data.put("mediaIdade", result[1]);
            response.add(data);
        }

        return response;
    }

    @GetMapping("/doadores-por-tipo-sanguineo")
    public Map<String, Integer> getDoadoresPorTipoSanguineo(@RequestParam("tipoSanguineo") String tipoSanguineo) {
        double idadeMinima = 16;
        double idadeMaxima = 69;
        int pesoMinimo = 50;

        List<Doador> doadores = doadoresRepository.findByTipoSanguineoAndIdadePesoRestricoes(tipoSanguineo, idadeMinima,
                idadeMaxima, pesoMinimo);
        int quantidadeDoadores = doadores.size();

        Map<String, Integer> response = new HashMap<>();
        response.put("quantidadeDoadores", quantidadeDoadores);

        return response;
    }

}
