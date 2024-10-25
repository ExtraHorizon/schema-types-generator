/* eslint-disable */
/* !! DO NOT MODIFY THIS FILE BY HAND !!
 * It was automatically generated from the schema files.
 * If you want to regenerate this file, do 'yarn script scripts/update-schema-types.ts' from the root of the repository
 */

/**
 * Blood pressure measurement
 */
export interface BloodPressureMeasurement {
  /**
   * Systolic pressure in mmHg
   */
  systolic?: number;
  /**
   * Diastolic pressure in mmHg
   */
  diastolic?: number;
  /**
   * Timestamp when the measurement was taken
   */
  timestamp?: string;
}
