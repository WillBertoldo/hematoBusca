package com.williambertoldo.apihematobusca.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.williambertoldo.apihematobusca.entity.Doador;

@Repository
public interface DoadoresRepository extends JpaRepository<Doador, Long> {

    @Query("SELECT COUNT(d) FROM Doador d WHERE d.estado = :estado")
    Long countDoadoresByEstado(String estado);

    boolean existsByCpf(String cpf);



    @Query(value = "SELECT CASE "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 0 AND 10 THEN '0 a 10' "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 11 AND 20 THEN '11 a 20' "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 21 AND 30 THEN '21 a 30' "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 31 AND 40 THEN '31 a 40' "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 41 AND 50 THEN '41 a 50' "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 51 AND 60 THEN '51 a 60' "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 61 AND 70 THEN '61 a 70' "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 71 AND 80 THEN '71 a 80' "
            + "WHEN FLOOR(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.data_nascimento, 1, 10), '%d/%m/%Y')) / 365.25 / 10) * 10 BETWEEN 81 AND 90 THEN '81 a 90' "
            + "END AS faixaIdade, "
            + "AVG(d.peso / (d.altura * d.altura)) AS imcMedio "
            + "FROM DOADORES d "
            + "GROUP BY faixaIdade", nativeQuery = true)
    List<Object[]> calculateAverageIMCByAgeRange();


    @Query("SELECT COUNT(d) FROM Doador d WHERE d.sexo = :sexo")
    Long countDoadoresBySex(@Param("sexo") String sexo);


    @Query("SELECT COUNT(d) FROM Doador d WHERE d.sexo = 'Masculino' AND (d.peso / (d.altura * d.altura)) >= 30")
    Long countObeseMen();


    @Query("SELECT COUNT(d) FROM Doador d WHERE d.sexo = 'Feminino' AND (d.peso / (d.altura * d.altura)) >= 30")
    Long countObeseWomen();


    @Query("SELECT d.tipoSanguineo, AVG(DATEDIFF(CURRENT_DATE(), STR_TO_DATE(SUBSTRING(d.dataNascimento, 1, 10), '%d/%m/%Y')) / 365.25) AS mediaIdade "
            + "FROM Doador d "
            + "GROUP BY d.tipoSanguineo")
    List<Object[]> calculateAverageAgeByBloodType();


    @Query("SELECT d FROM Doador d WHERE d.tipoSanguineo = :tipoSanguineo "
    + "AND TIMESTAMPDIFF(YEAR, STR_TO_DATE(SUBSTRING(d.dataNascimento, 1, 10), '%d/%m/%Y'), CURRENT_DATE()) BETWEEN :idadeMinima AND :idadeMaxima "
    + "AND d.peso > :pesoMinimo")
List<Doador> findByTipoSanguineoAndIdadePesoRestricoes(
    @Param("tipoSanguineo") String tipoSanguineo,
    @Param("idadeMinima") double idadeMinima,
    @Param("idadeMaxima") double idadeMaxima,
    @Param("pesoMinimo") int pesoMinimo);


}
