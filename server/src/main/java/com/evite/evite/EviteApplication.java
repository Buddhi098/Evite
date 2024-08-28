package com.evite.evite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;

@SpringBootApplication
public class EviteApplication {

	public static void main(String[] args) {
		SpringApplication.run(EviteApplication.class, args);
	}

}
