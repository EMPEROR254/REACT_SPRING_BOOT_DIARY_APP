package brian.sang.diaryapp.controllers;

import brian.sang.diaryapp.entities.DiaryEntry;
import brian.sang.diaryapp.services.DiaryEntryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/entries")
public class DiaryEntryCotroller {
    private final DiaryEntryService service;

    public DiaryEntryCotroller(DiaryEntryService service) {
        this.service = service;
    }

    @GetMapping("/find/all")
    private List<DiaryEntry> findAllEntries(){
        return service.findAllEntries();
    }

    @GetMapping("/find/{id}")
    private DiaryEntry findEntryById(@PathVariable("id")String entryIdStr){
        UUID entryId = UUID.fromString(entryIdStr);
        return service.findEntryById(entryId);
    }

    @PostMapping("/new")
    private void addNewEntry(@RequestBody DiaryEntry entry){
        service.addNewEntry(entry);
    }

    @PutMapping("/update/{id}")
    private void updateEntry(@PathVariable("id") String entryIdStr,
                             @RequestBody DiaryEntry entry){
        entry.setEntryId(UUID.fromString(entryIdStr));
        service.updateDiaryEntry(entry);
    }

    @DeleteMapping("/delete/{id}")
    private void deleteDiaryEntryById(@PathVariable("id")String entryIdStr){
        UUID entryId = UUID.fromString(entryIdStr);
        service.deleteEDiaryntryById(entryId);
    }

    @DeleteMapping("/delete/multiple")
    private void deleteMultipleDiaryEntries( @RequestBody List<UUID> entries){
        service.deleteMultipleDiaryEntries(entries);
    }

}
