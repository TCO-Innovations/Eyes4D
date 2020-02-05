-- -------------------------------------------------------------
-- TablePlus 3.1.0(290)
--
-- https://tableplus.com/
--
-- Database: eyes4d
-- Generation Time: 2020-02-05 12:50:35.0740
-- -------------------------------------------------------------


DROP VIEW IF EXISTS "public"."surveys";


DROP TABLE IF EXISTS "public"."villages";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS villages_id_seq;

-- Table Definition
CREATE TABLE "public"."villages" (
    "id" int4 NOT NULL DEFAULT nextval('villages_id_seq'::regclass),
    "name" varchar,
    "houses" int4,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('24', 'Hatwelo', '269');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('25', 'Horongo', '438');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('26', 'Ifiga', '487');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('27', 'Igale', '493');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('28', 'Isangala', '549');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('29', 'Itaga', '429');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('30', 'Itimu', '327');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('31', 'Iwalanje', '339');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('32', 'Iwindi', '1109');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('33', 'Izumbwe', '552');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('34', 'Maganjo', '381');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('35', 'Mageuzi', '1485');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('36', 'Mapinduzi', '1252');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('37', 'Mshikamano', '798');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('38', 'Mwampala', '415');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('39', 'Mwaselela', '352');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('40', 'Mwashiwawala', '448');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('41', 'Ndola', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('42', 'Nsalala', '2229');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('43', 'Nsambya', '261');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('44', 'Nsongwi Juu', '813');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('45', 'Nsongwi Mantanji', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('46', 'Ntangano Ijombe', '356');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('47', 'Shongo', '460');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('48', 'Tunduma Road', '1177');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('49', 'MBARALI VILLAGES', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('50', 'Village ', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('51', 'Chimala', '696');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('52', 'Igumbilo', '450');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('53', 'Ikoga', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('54', 'Isitu', '1193');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('55', 'Lusese', '588');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('56', 'Lyambogo', '1013');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('57', 'Mabadaga', '1173');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('58', 'Maendeleo', '683');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('59', 'Mahango', '1945');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('60', 'Mahongole', '642');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('61', 'Majenje', '640');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('62', 'Mapogoro', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('63', 'Mengele', '868');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('64', 'Miyombweni', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('65', 'Motomoto', '555');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('66', 'Msesule', '293');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('67', 'Mtamba', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('68', 'Muale', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('69', 'Nyakazombe', '228');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('70', 'Nyamakuyu', '515');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('71', 'Ilongo', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('72', 'Ruiwa', '568');
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('73', 'Ukwama', NULL);
INSERT INTO "public"."villages" ("id", "name", "houses") VALUES ('74', 'Uturo', '589');

CREATE VIEW "public"."surveys" AS SELECT contacts.id AS contact_id,
    lower((contacts.name)::text) AS contact_name,
    contacts.urn AS contact_phone,
    lower((contacts.gender)::text) AS contact_gender,
    lower((contacts.village_assigned)::text) AS assigned_village,
    lower((villages.name)::text) AS village_name,
    villages.houses,
    contacts.households_visited,
    contacts.last_household_visit,
    contacts.region,
    lower((contacts.district)::text) AS district,
    runs.id AS run_id,
    lower((runs.head_of_house)::text) AS head_of_house,
    runs.is_there_a_latrine AS has_latrine,
    runs.does_it_have_a_lockable_door AS has_lockable_door,
    runs.does_it_have_brick_wall AS has_brick_wall,
    runs.does_the_latrine_have_a_cemented_floor AS has_cemented_floor,
    runs.has_iron_sheet_roof,
    runs.does_it_have_a_bathroom_next_to_it AS has_adjacent_bathroom,
    runs.place_for_hand_washing AS has_handwashing_place,
    runs.container_for_hand_washing AS has_handwashing_container,
    runs.is_there_soap AS has_soap,
    runs.kinyesi_kuzunguka_nyumba,
    runs.kinyesi_ukutani,
    runs.created_on AS created_at,
    runs.modified_on AS updated_at
   FROM ((contacts
     LEFT JOIN villages ON ((lower((villages.name)::text) = lower((contacts.village_assigned)::text))))
     LEFT JOIN runs ON (((runs.contact_uuid)::text = (contacts.uuid)::text)));
