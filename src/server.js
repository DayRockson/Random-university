import { createServer } from "miragejs";

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/programs", () => {
        return {
          programs: [
            {
                id: 1,
                name: "Education",
                num_courses: 3,
                courses: [
                    {name: "Education: Elementary and Middle Years"},
                    {name: "Education: International Baccalaureate"},
                    {name: "Education: Secondary"}
                ]
            },
            {
                id: 2,
                name: "Engineering and Technology",
                num_courses: 5,
                courses: [
                    {name: "Biomedical Engineering"},
                    {name: "Chemical Engineering"},
                    {name: "Computer Engineering"},
                    {name: "Computer Science (BSc)"},
                    {name: "Data Science"}
                ]
            },
            {
                id: 3,
                name: "Earth, Environment, and Sustainability",
                num_courses: 3,
                courses: [
                    {name: "Archeology"},
                    {name: "Earth and Ocean Sciences"},
                    {name: "Geology"}
                ]
            },
            {
                id: 4,
                name: "Health and Life Sciences",
                num_courses: 10,
                courses: [
                    {name: "Applied Animal Biology"},
                    {name: "Biochemistry"},
                    {name: "Biochemisty and Molecular Biology"},
                    {name: "Biology"},
                    {name: "Biomedical Engineering"},
                    {name: "Dentistry"},
                    {name: "Medicine"},
                    {name: "Molecular Biology"},
                    {name: "Neuroscience"},
                    {name: "Physiologoy"}
                ]
            },
            {
                id: 5,
                name: "Language and Linguistics",
                num_courses: 6,
                courses: [
                    {name: "Asian Language and Culture"},
                    {name: "English"},
                    {name: "French"},
                    {name: "German"},
                    {name: "General Studies"},
                    {name: "Linguistics"}
                ]
            },
            {
                id: 6,
                name: "Law, Politics and History",
                num_courses: 10,
                courses: [
                    {name: "Ancient Mediterranean and Near Eastern Studies"},
                    {name: "Asian Area Studies"},
                    {name: "Canadian Studies"},
                    {name: "General Studies"},
                    {name: "History"},
                    {name: "Interdisciplinary Studies"},
                    {name: "International Relations"},
                    {name: "Latin American Studies"},
                    {name: "Law"},
                    {name: "Political Science"}
                ]
            },
            {
                id: 7,
                name: "Math, Chemistry and Physics",
                num_courses: 10,
                courses: [
                    {name: "Astronomy"},
                    {name: "Biochemistry"},
                    {name: "Biophysics"},
                    {name: "Chemistry"},
                    {name: "Combined Major in Statistics"},
                    {name: "General Science"},
                    {name: "Geophysics"},
                    {name: "Physics"},
                    {name: "Pure Math"},
                    {name: "Statistics and Macroeconomics"}
                ]
            },
            {
                id: 8,
                name: "Media and Fine Arts",
                num_courses: 7,
                courses: [
                    {name: "Art History"},
                    {name: "Cinema Studies"},
                    {name: "Creative Writing"},
                    {name: "Film Production"},
                    {name: "Journalism"},
                    {name: "Media Studies"},
                    {name: "Music"}
                ]
            },
            {
                id: 9,
                name: "People, Culture and Society",
                num_courses: 5,
                courses: [
                    {name: "Anthropolgy"},
                    {name: "Archeology"},
                    {name: "Architecture, Landscape Architecture and Urbanism"},
                    {name: "Cultural Studies"},
                    {name: "Environmental Design"}
                ]
            }
          ],
        };
      });
    },
  });

  return server;
}



