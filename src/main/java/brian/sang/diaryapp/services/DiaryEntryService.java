package brian.sang.diaryapp.services;

import brian.sang.diaryapp.entities.DiaryEntry;
import brian.sang.diaryapp.repositories.DiaryEntryRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class DiaryEntryService {
    private final DiaryEntryRepository repository;

    public DiaryEntryService(DiaryEntryRepository repository) {
        this.repository = repository;
    }

    public List<DiaryEntry> findAllEntries() {
        return repository.findAll();
    }

    public DiaryEntry findEntryById(UUID entryId) {
        return repository.findById(entryId);
    }

    public void addNewEntry(DiaryEntry entry) {
        entry.setEntryId(UUID.randomUUID());
        entry.setCreatedAt(LocalDate.now());
        entry.setUpdatedAt(LocalDate.now());
        repository.addNewEntry(entry);
    }

    public void updateDiaryEntry(DiaryEntry entry) {
        entry.setUpdatedAt(LocalDate.now());
        repository.updateDiaryEntry(entry);
    }

    public void deleteEDiaryntryById(UUID entryId) {
        repository.deleteDiaryEntryById(entryId);
    }

    public void deleteMultipleDiaryEntries(List<UUID> entries) {
        repository.deleteMultipleDiaryEntries(entries);
    }
}
