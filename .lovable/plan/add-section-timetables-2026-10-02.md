# Add section timetables

## What will change
- Add a **View timetable** action beside **View students** on CSE-10, CSE-11, and CSE-12.
- Map the uploaded schedules as CSE-10 = Section J, CSE-11 = Section K, and CSE-12 = Section L.
- Show each timetable in a readable pop-up with Monday–Saturday periods, times, classroom, class teacher, and an abbreviation key.
- Keep the current student-list behavior unchanged; CSE-10 will show only its timetable until its student list is provided.

## Verification
- Check all three timetable buttons and the existing CSE-11/CSE-12 student buttons.
- Check desktop and mobile layouts and confirm the page reports no errors.

## Technical details
- Store the extracted schedule as typed page data and render it through one shared timetable dialog.
- Use horizontally scrollable tables on narrow screens so period details remain legible.
