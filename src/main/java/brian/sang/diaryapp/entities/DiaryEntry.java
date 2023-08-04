package brian.sang.diaryapp.entities;

import java.time.LocalDate;
import java.util.UUID;


public class DiaryEntry {

    private UUID entryId;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private String title;

    private String entry_body;

    public DiaryEntry() {
    }

    public DiaryEntry(UUID entryId,
                      LocalDate createdAt,
                      LocalDate updatedAt,
                      String title,
                      String entry_body) {
        this.entryId = entryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.title = title;
        this.entry_body = entry_body;
    }

    public DiaryEntry(String title, String entry_body) {
        this.title = title;
        this.entry_body = entry_body;
    }

    public UUID getEntryId() {
        return entryId;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public String getTitle() {
        return title;
    }

    public String getEntry_body() {
        return entry_body;
    }

    public void setEntryId(UUID entryId) {
        this.entryId = entryId;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setEntry_body(String entry_body) {
        this.entry_body = entry_body;
    }

    @Override
    public String toString() {
        return "DiaryEntry{" +
                "entryId=" + entryId +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", title='" + title + '\'' +
                ", body='" + entry_body + '\'' +
                '}';
    }
}
