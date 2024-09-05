package com.evite.evite.service;


import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FileStorageService {

    private final Path fileStorageLocation;

    public FileStorageService() throws IOException {

        // Define the base directory where files will be stored
        this.fileStorageLocation = Paths.get("file-storage").toAbsolutePath().normalize();

        // Create the base directory if it does not exist
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

    // New function to store a list of images according to event ID
    public List<String> storeEventImages(String eventId, List<MultipartFile> files) {
        // Define the directory for storing event images
        Path eventDirectory = this.fileStorageLocation.resolve("events").resolve(eventId).toAbsolutePath().normalize();

        try {
            // Create the event directory if it does not exist
            Files.createDirectories(eventDirectory);

            // Store each file in the event directory and return the paths of stored files
            return files.stream()
                    .map(file -> {
                        String fileName = file.getOriginalFilename();

                        if (fileName == null || fileName.contains("..")) {
                            throw new RuntimeException("Invalid filename: " + fileName);
                        }

                        try {
                            Path targetLocation = eventDirectory.resolve(fileName);
                            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
                            return targetLocation.toString();
                        } catch (IOException ex) {
                            throw new RuntimeException("Could not store file " + fileName + ". Please try again!", ex);
                        }
                    })
                    .collect(Collectors.toList());

        } catch (IOException ex) {
            throw new RuntimeException("Could not create directory for event " + eventId + ". Please try again!", ex);
        }
    }
}

