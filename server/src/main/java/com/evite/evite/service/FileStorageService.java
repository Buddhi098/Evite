package com.evite.evite.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileStorageService {

    private final Path fileStorageLocation;

    public FileStorageService() throws IOException {
        // Define the directory where files will be stored
        this.fileStorageLocation = Paths.get("file-storage").toAbsolutePath().normalize();

        // Create the directory if it does not exist
        Files.createDirectories(this.fileStorageLocation);
    }

    public String storeFile(MultipartFile file) {
        // Normalize the file name
        String fileName = file.getOriginalFilename();
        System.out.println(fileName);

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new IOException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            // Return the stored file's path
            return targetLocation.toString();
        } catch (IOException ex) {
            throw new RuntimeException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }
}

