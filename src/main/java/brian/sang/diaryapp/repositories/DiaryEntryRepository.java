package brian.sang.diaryapp.repositories;

import brian.sang.diaryapp.entities.DiaryEntry;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Repository
public class DiaryEntryRepository {
    private JdbcTemplate jdbcTemplate;

    public DiaryEntryRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<DiaryEntry> findAll() {
        String sql =
                "SELECT entry_id,"+
                "created_at," +
                "updated_at," +
                "title," +
                "entry_body" +
                " FROM diary_db";
        return jdbcTemplate.query(
                sql,
                mapEntriesFromDb()
        );
    }

    public DiaryEntry findById(UUID entryId) {
        String sql="SELECT *"+
                "FROM diary_db " +
                "WHERE entry_id = ?";

        return jdbcTemplate.queryForObject(sql,
                mapEntriesFromDb(),
                entryId);
    }

    public int addNewEntry(DiaryEntry entry) {
        String sql = "INSERT INTO diary_db"+
                "(entry_id,"+
                "created_at,"+
                "updated_at,"+
                "title,"+
                "entry_body)"+
                "VALUES(?,?,?,?,?)";

        return jdbcTemplate.update(
                sql,
                entry.getEntryId(),
                entry.getCreatedAt(),
                entry.getUpdatedAt(),
                entry.getTitle(),
                entry.getEntry_body()
        );
    }

    private RowMapper<DiaryEntry> mapEntriesFromDb(){
        return(resultSet, i )->{
            UUID entryId = UUID.fromString(resultSet.getString("entry_id"));
            LocalDate createdAt = resultSet.getDate("created_at").toLocalDate();
            LocalDate updatedAt = resultSet.getDate("updated_at").toLocalDate();
            String title = resultSet.getString("title");
            String entry_body = resultSet.getString("entry_body");

            return new DiaryEntry(
                    entryId,
                    createdAt,
                    updatedAt,
                    title,
                    entry_body
            );
        };
    }

    public int deleteDiaryEntryById(UUID entryId) {
        String sql =
                "DELETE FROM diary_db "
                +"WHERE entry_id = ?";
        return jdbcTemplate.update(sql, entryId);
    }

    public void deleteMultipleDiaryEntries(List<UUID> entries) {
        entries.forEach(this::deleteDiaryEntryById);

    }

    public int updateDiaryEntry(DiaryEntry entry) {
        String sql =
                "UPDATE diary_db SET "
                        + "updated_at = ?, "
                        + "title = ?, "
                        + "entry_body = ? "
                        + "WHERE entry_id = ?";

        return jdbcTemplate.update(sql,
                entry.getUpdatedAt(),
                entry.getTitle(),
                entry.getEntry_body(),
                entry.getEntryId());
    }
}
